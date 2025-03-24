"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, X, Loader2 } from "lucide-react";
import type { FormField as FormFieldType } from "@/types/add-caregiver-form";
import type React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface FormFieldProps {
  field: FormFieldType;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  error?: string;
  clearImage?: boolean;
  isLastInGroup?: boolean; // New prop with default value
}

/**
 * FormField component for rendering different types of form inputs
 * @param {FormFieldProps} props - The props for the FormField component
 * @returns {JSX.Element} The rendered FormField component
 */
export function FormField({
  field,
  value,
  onChange,
  readOnly = false,
  error,
  clearImage = false,
  isLastInGroup = false, // New prop with default value
}: FormFieldProps): JSX.Element {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (clearImage) {
      setPreviewUrl(null);
      onChange("");
    }
  }, [clearImage, onChange]);

  /**
   * Handles file selection
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
      onChange(file.name);
    }
  };

  /**
   * Removes the selected file
   */
  const handleRemoveFile = () => {
    setPreviewUrl(null);
    onChange("");
  };

  /**
   * Renders the appropriate input based on the field type
   * @returns {JSX.Element} The rendered input element
   */
  const renderInput = (): JSX.Element => {
    switch (field.type) {
      case "textarea":
        return (
          <div className="w-full min-w-[400px] max-w-[500px]">
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="min-h-[100px] max-w-[500px] w-full bg-main2 text-regular-text-thicker"
              readOnly={readOnly}
              style={{
                color: "#424957",
                fontSize: "1.1em",
              }}
            />
          </div>
        );
      case "file":
        return (
          <div className="flex justify-end items-center">
            <input
              id={field.id}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {isUploading ? (
              <div className="h-12 w-12 rounded-full flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : previewUrl ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-12 h-12 cursor-pointer">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      sizes="100vw"
                      className="rounded-full"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[300px] min-w-[300px]">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={previewUrl || "/placeholder.svg"}
                      alt="Full size preview"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <label
                htmlFor={field.id}
                className="h-12 w-12 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Upload className="h-6 w-6" />
              </label>
            )}
            {previewUrl && !isUploading && (
              <button
                onClick={handleRemoveFile}
                className="ml-2 p-2 bg-support-colors-color3 rounded-full text-white"
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        );
      default:
        return (
          <div className={`relative inline-block max-w-[300px]`}>
            <Input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              readOnly={readOnly}
              className={`text-right bg-main2 border-[0.5px] max-w-[300px] text-neutral-10 text-regular-text-thicker`}
              style={{
                color: "#424957",
                fontSize: "1.1em",
                width: value
                  ? `${Math.max(value.length * 8 + 16, 100)}px`
                  : "200px",
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`p-2 px-4 ${isLastInGroup ? "" : "border-b py-2 pb-4"}`}>
      <div className="flex items-center justify-between gap-4">
        <label
          htmlFor={field.id}
          className="text-gray-600 whitespace-nowrap cursor-pointer"
        >
          {field.label}
        </label>
        <div className="flex justify-end">{renderInput()}</div>
      </div>
      {error && (
        <p className={`text-sm  mt-1 text-support-colors-color3`}>{error}</p>
      )}
    </div>
  );
}
