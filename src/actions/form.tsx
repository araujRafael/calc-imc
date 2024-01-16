'use server'

import { redirect } from "next/navigation";

export const calcIMC = (formData: FormData) => {

    const raw = {
        age: formData.get('age'),
        height: formData.get('height'),
        weight: formData.get('weight'),
        desired_weight: formData.get('desired_weight'),
        gender: formData.get('gender'),
        daily_act: formData.get('daily_act'),
    }
    const height = Number(raw.height) / 100
    let IMC = Number(raw.weight) / (height * height)

    redirect(`/done?imc=${IMC.toFixed(2)}`)
}