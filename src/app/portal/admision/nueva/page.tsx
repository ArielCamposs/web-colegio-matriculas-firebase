"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/providers";
import { db } from "@/lib/firebase/client";
import { uploadAdmissionFile } from "@/lib/firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const STEPS = [
    { id: 1, name: "Estudiante" },
    { id: 2, name: "Apoderado" },
    { id: 3, name: "Antecedentes" },
    { id: 4, name: "Documentos" }
];

export default function NewAdmissionPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        studentName: "",
        studentRut: "",
        studentBirthdate: "",
        grade: "",
        guardianPhone: "",
        guardianAddress: "",
        previousSchool: "",
        observations: "",
    });

    // Files State
    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        idCopy: null,
        birthCert: null,
        reportCard: null,
    });

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (type: string, file: File | null) => {
        setFiles(prev => ({ ...prev, [type]: file }));
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const handleSubmit = async () => {
        if (!user) return;
        setLoading(true);
        try {
            // 1. Create Application in Firestore
            const appRef = await addDoc(collection(db, "applications"), {
                guardian_id: user.uid,
                status: "submitted",
                student_data: {
                    name: formData.studentName,
                    rut: formData.studentRut,
                    birthdate: formData.studentBirthdate,
                    grade: formData.grade,
                },
                guardian_data: {
                    phone: formData.guardianPhone,
                    address: formData.guardianAddress,
                },
                academic_data: {
                    previous_school: formData.previousSchool,
                    observations: formData.observations,
                },
                created_at: serverTimestamp(),
                updated_at: serverTimestamp(),
            });

            // 2. Upload Files if they exist
            const uploadPromises = Object.entries(files).map(async ([type, file]) => {
                if (file) {
                    const { url } = await uploadAdmissionFile({
                        uid: user.uid,
                        appId: appRef.id,
                        docType: type,
                        file
                    });

                    // Add document reference to Firestore
                    await addDoc(collection(db, "documents"), {
                        application_id: appRef.id,
                        type,
                        url,
                        name: file.name,
                        verified: false,
                        created_at: serverTimestamp(),
                    });
                }
            });

            await Promise.all(uploadPromises);
            router.push("/portal?success=true");
        } catch (error: any) {
            alert("Error al enviar postulación: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-8">
            {/* Stepper Header */}
            <div className="mb-12">
                <div className="flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 -translate-y-1/2" />
                    <div
                        className="absolute top-1/2 left-0 h-0.5 bg-slate-900 transition-all duration-500 -z-10 -translate-y-1/2"
                        style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
                    />
                    {STEPS.map((s) => (
                        <div key={s.id} className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4 ${step >= s.id ? "bg-slate-900 text-white border-slate-900 shadow-lg" : "bg-white text-slate-400 border-slate-100"
                                }`}>
                                {step > s.id ? "✓" : s.id}
                            </div>
                            <span className={`text-xs mt-2 font-bold ${step >= s.id ? "text-slate-900" : "text-slate-400"}`}>
                                {s.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-8 md:p-10 mb-8">
                {step === 1 && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900">Datos del Estudiante</h2>
                            <p className="text-slate-500">Información básica del postulante.</p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Nombre Completo</label>
                                <input className="input-field" value={formData.studentName} onChange={e => updateField("studentName", e.target.value)} required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">RUT</label>
                                <input className="input-field" placeholder="12.345.678-9" value={formData.studentRut} onChange={e => updateField("studentRut", e.target.value)} required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Fecha de Nacimiento</label>
                                <input type="date" className="input-field" value={formData.studentBirthdate} onChange={e => updateField("studentBirthdate", e.target.value)} required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Curso al que postula</label>
                                <select className="input-field" value={formData.grade} onChange={e => updateField("grade", e.target.value)} required>
                                    <option value="">Seleccione curso</option>
                                    <option value="1basico">1° Básico</option>
                                    <option value="2basico">2° Básico</option>
                                    <option value="3basico">3° Básico</option>
                                    {/* ... more grades */}
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900">Datos del Apoderado</h2>
                            <p className="text-slate-500">Como titular de la postulación.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Teléfono de Contacto</label>
                                <input className="input-field" placeholder="+56 9 ..." value={formData.guardianPhone} onChange={e => updateField("guardianPhone", e.target.value)} required />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Dirección Particular</label>
                                <input className="input-field" value={formData.guardianAddress} onChange={e => updateField("guardianAddress", e.target.value)} required />
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900">Antecedentes Académicos</h2>
                            <p className="text-slate-500">Historial escolar del estudiante.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Colegio de Procedencia</label>
                                <input className="input-field" value={formData.previousSchool} onChange={e => updateField("previousSchool", e.target.value)} />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700">Observaciones Generales</label>
                                <textarea className="input-field min-h-[120px]" value={formData.observations} onChange={e => updateField("observations", e.target.value)} />
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-slate-900">Carga de Documentos</h2>
                            <p className="text-slate-500">Formatos permitidos: PDF, JPG, PNG (Máx 8MB).</p>
                        </div>
                        <div className="grid gap-6">
                            <FileDrop title="Cédula de Identidad (Apoderado)" id="idCopy" onChange={f => handleFileChange("idCopy", f)} file={files.idCopy} />
                            <FileDrop title="Certificado de Nacimiento" id="birthCert" onChange={f => handleFileChange("birthCert", f)} file={files.birthCert} />
                            <FileDrop title="Último Informe de Notas" id="reportCard" onChange={f => handleFileChange("reportCard", f)} file={files.reportCard} />
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4">
                <button
                    disabled={step === 1 || loading}
                    onClick={prevStep}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-30"
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7" />
                    </svg>
                    Atrás
                </button>

                {step < 4 ? (
                    <button
                        onClick={nextStep}
                        className="flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-3 font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Siguiente
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                ) : (
                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-10 py-3 font-bold text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-500 hover:scale-[1.05] active:scale-[0.95] disabled:opacity-50"
                    >
                        {loading ? "Enviando..." : "Enviar Postulación Final"}
                    </button>
                )}
            </div>

            <style jsx global>{`
                .input-field {
                    width: 100%;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    background-color: #f8fafc;
                    padding: 10px 16px;
                    font-size: 14px;
                    transition: all 0.2s;
                    outline: none;
                }
                .input-field:focus {
                    background-color: #ffffff;
                    border-color: #0f172a;
                    box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.05);
                }
            `}</style>
        </div>
    );
}

function FileDrop({ title, id, onChange, file }: { title: string, id: string, file: File | null, onChange: (f: File | null) => void }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 ml-1">{title}</label>
            <div className={`relative group p-6 border-2 border-dashed rounded-2xl transition-all flex flex-col items-center justify-center gap-2 ${file ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/50"
                }`}>
                <input
                    type="file"
                    id={id}
                    onChange={e => onChange(e.target.files ? e.target.files[0] : null)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${file ? "bg-emerald-100 text-emerald-600" : "bg-white text-slate-400 border border-slate-100 shadow-sm"}`}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={file ? "M5 13l4 4L19 7" : "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"} />
                    </svg>
                </div>
                <div className="text-center">
                    <p className={`text-sm font-bold ${file ? "text-emerald-700" : "text-slate-700"}`}>
                        {file ? file.name : "Subir archivo"}
                    </p>
                    {!file && <p className="text-xs text-slate-500 mt-1">Haga clic o arrastre aquí</p>}
                </div>
                {file && (
                    <button onClick={(e) => { e.preventDefault(); onChange(null); }} className="absolute top-4 right-4 text-emerald-600 hover:text-emerald-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
