"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Upload, X, Loader2 } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ImageUploadProps {
    value: string
    onChange: (url: string) => void
    disabled?: boolean
}

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false)
    const supabase = createClient()

    const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files?.[0]
            if (!file) return

            setIsUploading(true)

            const fileExt = file.name.split(".").pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`

            const { error: uploadError } = await supabase.storage
                .from("portfolio-assets")
                .upload(filePath, file)

            if (uploadError) {
                throw uploadError
            }

            const { data } = supabase.storage
                .from("portfolio-assets")
                .getPublicUrl(filePath)

            onChange(data.publicUrl)
        } catch (error) {
            console.error("Error uploading image:", error)
            alert("Error uploading image")
        } finally {
            setIsUploading(false)
        }
    }

    if (value) {
        return (
            <div className="relative h-40 w-40 overflow-hidden rounded-md border">
                <div className="absolute right-2 top-2 z-10">
                    <Button
                        type="button"
                        onClick={() => onChange("")}
                        variant="destructive"
                        size="icon"
                        className="h-6 w-6"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <Image
                    fill
                    className="object-cover"
                    alt="Image"
                    src={value}
                />
            </div>
        )
    }

    return (
        <div className="flex w-full items-center justify-center">
            <Label
                htmlFor="image-upload"
                className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-muted/50 hover:bg-muted/80"
            >
                {isUploading ? (
                    <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
                ) : (
                    <Upload className="h-10 w-10 text-muted-foreground" />
                )}
                <span className="mt-2 text-sm text-muted-foreground">
                    {isUploading ? "Uploading..." : "Upload Image"}
                </span>
                <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={onUpload}
                    disabled={disabled || isUploading}
                />
            </Label>
        </div>
    )
}
