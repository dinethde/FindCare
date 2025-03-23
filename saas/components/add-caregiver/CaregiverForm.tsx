"use client";

import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FormField } from "./FormField";
import { MultiSelect } from "./MultiSelect";
import { BulkUpload } from "./BulkUpload";
import {
  formFields,
  tabOptions,
  generateNextCaregiverId,
  caregivers,
} from "@/data/add-caregiver-form";
import { useState } from "react";
import type { Caregiver, FormField as FormFieldType } from "@/types/add-caregiver-form";
import { colorProps } from "@/data/ColorProps";

// Define the schema for form validation
const schema = z.object({
  caregiver_name: z.string().min(1, "Caregiver Name is required"),
  caregiver_id: z.string(),
  tagline: z.string().min(1, "Tagline is required"),
  photo: z.string().min(1, "Photo is required"),
  about: z.string().min(1, "About is required"),
  total_clients: z.string().min(1, "Total clients is required"),
  years_excellence: z.string().min(1, "Years of excellence is required"),
  live_in: z.string().min(1, "Live in location is required"),
  caregiver_specificity: z
    .array(z.string())
    .min(1, "At least one specificity is required"),
  key_features: z
    .array(z.string())
    .min(1, "At least one key feature is required"),
  general_features: z
    .array(z.string())
    .min(1, "At least one general feature is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

/**
 * CaregiverForm component for adding new caregivers
 * @returns {React.ReactElement} The rendered CaregiverForm component
 */
export function CaregiverForm(): React.ReactElement {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [clearImage, setClearImage] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      caregiver_id: generateNextCaregiverId(),
    },
  });

  /**
   * Handles form submission
   * @param {FormData} data - The form data
   * @returns {void}
   */
  const onSubmit = (data: FormData): void => {
    setIsSubmitting(true);

    // Create a new caregiver object
    const newCaregiver: Caregiver = {
      id: data.caregiver_id,
      name: data.caregiver_name,
      tagline: data.tagline,
      photo: data.photo,
      about: data.about,
      totalClients: data.total_clients,
      yearsExcellence: data.years_excellence,
      liveIn: data.live_in,
      caregiverSpecificity: data.caregiver_specificity,
      keyFeatures: data.key_features,
      generalFeatures: data.general_features,
      email: data.email,
      password: data.password,
    };

    // Add the new caregiver to the caregivers array
    caregivers.push(newCaregiver);

    // Simulating an API call with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setClearImage(true);
      reset({
        caregiver_id: generateNextCaregiverId(),
      });
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setClearImage(false);
      }, 3000);
    }, 1000);
  };

  const renderFieldContent = (
    field: FormFieldType,
    value: string | string[],
    onChange: (value: string | string[]) => void,
    isLastInGroup: boolean = false
  ) => {
    if (field.type === "select") {
      return (
        <MultiSelect
          label={field.label}
          options={field.options || []}
          maxSelect={field.maxSelect}
          selectedValues={Array.isArray(value) ? value : []}
          onChange={onChange}
          error={errors[field.id as keyof FormData]?.message}
        />
      );
    }
    return (
      <FormField
        field={field}
        value={typeof value === 'string' ? value : ''}
        onChange={onChange}
        error={errors[field.id as keyof FormData]?.message}
        isLastInGroup={isLastInGroup}
        readOnly={field.id === "caregiver_id"}
        clearImage={clearImage && field.type === "file"}
      />
    );
  };

  return (
    <div className="w-full p-4 relative overflow-y-scroll">
      {showSuccess && (
        <div
          className={`fixed top-4 right-4  border border-green-400 text-green-700 px-4 py-3 rounded shadow-md z-50 `}
          role="alert"
          style={{
            backgroundColor: colorProps.green[400],
            color: colorProps.green[800],
          }}
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            New caregiver added successfully.
          </span>
        </div>
      )}

      <div className="w-full flex flex-col gap-6">
        <h1 className="text-h5 font-semibold">Add new caregiver</h1>

        <Tabs defaultValue="manually" className="w-full">
          <TabsList className="grid w-full grid-cols-2 p-2 h-fit bg-main2">
            {tabOptions.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-neutral-6 data-[state=active]:shadow-[inset_2px_-2px_10px_0px_rgba(0,0,0,0.10)] data-[state=active]:bg-main data-[state=active]:border-neutral-3 data-[state=active]:border"
              >
                <div className="p-3 flex flex-col gap-2.5 items-center justify-center cursor-pointer  data-[state=active]:text-neutral-10">
                  <p className="text-h6 ">{tab.title}</p>
                  <p className="text-regular-text">{tab.description}</p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="manually">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  {tabOptions[0].description}
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 w-full text-tagline text-neutral-8"
                >
                  <div className="border rounded-lg space-y-2">
                    {formFields.slice(0, 4).map((field, index) => (
                      <Controller
                        key={field.id}
                        name={field.id as keyof FormData}
                        control={control}
                        render={({ field: { onChange, value } }) =>
                          renderFieldContent(field, value, onChange, index === 3)
                        }
                      />
                    ))}
                  </div>

                  <div className="border rounded-lg py-4 space-y-2">
                    {formFields.slice(4, 8).map((field, index) => (
                      <Controller
                        key={field.id}
                        name={field.id as keyof FormData}
                        control={control}
                        render={({ field: { onChange, value } }) =>
                          renderFieldContent(field, value, onChange, index === 3)
                        }
                      />
                    ))}
                  </div>

                  {/* Render the rest of the form fields */}
                  {formFields.slice(8, 11).map((field) => (
                    <div
                      key={field.id}
                      className="bg-main border rounded-lg p-4 space-y-2"
                    >
                      <Controller
                        name={field.id as keyof FormData}
                        control={control}
                        render={({ field: { onChange, value } }) =>
                          renderFieldContent(field, value, onChange, true)
                        }
                      />
                    </div>
                  ))}

                  <div className="border rounded-lg py-4 space-y-2">
                    {formFields.slice(11).map((field, index) => (
                      <Controller
                        key={field.id}
                        name={field.id as keyof FormData}
                        control={control}
                        render={({ field: { onChange, value } }) =>
                          renderFieldContent(field, value, onChange, index === 1)
                        }
                      />
                    ))}
                  </div>

                  <div className="flex justify-end w-full">
                    <Button
                      type="submit"
                      className="flex gap-2 px-4 py-2 bg-brand-colors-brand2 text-white w-fit  rounded-md shadow-[inset_0px_-1px_4px_2px_rgba(255,255,255,0.30)] border border-brand-colors-brand5 text-regular-text-thicker h-fit items-center"
                      disabled={isSubmitting}
                    >
                      <Plus className="w-6 h-6" color="#fff" />
                      <p className="text-white">
                        {isSubmitting ? "Adding..." : "Add new caregiver"}
                      </p>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bulk">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  {tabOptions[1].description}
                </p>
                <BulkUpload />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
