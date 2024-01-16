'use client'
import { useSearchParams } from "next/navigation"
import React from "react"

interface DoneProps {

}

export default function Done({

}: DoneProps) {
    const params = useSearchParams()
    const IMC = params.get('imc')

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-medium">
                Seu IMC é: {IMC}kg/m²
            </h1>
        </div>
    )
}