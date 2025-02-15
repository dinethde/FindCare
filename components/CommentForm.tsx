"use client";

import type React from "react";
import { useState, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./Button";
import { SearchableDropdown } from "./SearchableDropdown";
import { caregivers } from "../data/Caregivers2";
import type { CommentFormData } from "../types";
import Placeholder from "@tiptap/extension-placeholder";

const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
};

const cleanEditorContent = (content: string): string => {
  // Remove wrapping <p> tags if they exist and clean up any double spaces
  return content
    .replace(/^<p>|<\/p>$/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export function CommentForm({
  onSubmit,
}: {
  onSubmit: (data: CommentFormData) => void;
}) {
  const [selectedCaregiver, setSelectedCaregiver] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [manualId, setManualId] = useState("");
  const [manualName, setManualName] = useState("");
  const [type, setType] = useState<"feedback" | "compliment" | "complaint">(
    "feedback"
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write your comment here...",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm focus:outline-none min-h-[100px] p-4",
      },
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor?.getText() || (!selectedCaregiver && !manualId && !manualName))
      return;

    const formData: CommentFormData = {
      content: cleanEditorContent(editor.getHTML()),
      type,
      caregiverId: selectedCaregiver?.id || manualId,
      caregiverName: selectedCaregiver?.name || manualName,
    };

    onSubmit(formData);
    resetForm();
  };

  const handleCaregiverChange = useCallback(
    (field: "id" | "name", value: { id: string; name: string } | null) => {
      if (value) {
        setSelectedCaregiver(value);
        setManualId(value.id);
        setManualName(value.name);
      } else {
        setSelectedCaregiver(null);
        if (field === "id") {
          setManualId("");
        } else {
          setManualName("");
        }
      }
    },
    []
  );

  const handleManualEdit = useCallback(
    (field: "id" | "name", value: string) => {
      if (field === "id") {
        setManualId(value);
        if (selectedCaregiver?.id !== value) {
          setSelectedCaregiver(null);
        }
      } else {
        setManualName(value);
        if (selectedCaregiver?.name !== value) {
          setSelectedCaregiver(null);
        }
      }
    },
    [selectedCaregiver]
  );

  const resetForm = useCallback(() => {
    editor?.commands.setContent("");
    setSelectedCaregiver(null);
    setManualId("");
    setManualName("");
    setType("feedback");
    formRef.current?.reset();
  }, [editor]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-2 shadow-sm flex flex-col gap-4"
    >
      <div className="border rounded-lg min-h-56 [&_.is-editor-empty]:before:text-neutral-8 [&_.is-editor-empty]:before:italic [&_.is-editor-empty]:before:content-[attr(data-placeholder)] [&_.is-editor-empty]:before:float-left [&_.is-editor-empty]:before:pointer-events-none">
        <EditorContent editor={editor} />
      </div>

      <div className="grid grid-cols-[1.75fr_0.5fr] gap-4 ">
        <div className="flex-1 grid grid-cols-[0.5fr_0.5fr_0.7fr_0.75fr] gap-4">
          <div className="flex items-center">
            <label className="text-tagline text-grey h-fit">Date:</label>
            <input
              type="text"
              value={getCurrentDate()}
              readOnly
              className="w-full p-2 bg-gray-50"
            />
          </div>
          <div className="flex items-center">
            <label className="text-regular-text text-grey h-fit">Tag:</label>
            <select
              className="w-fit p-2"
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
            >
              <option value="feedback">Feedback</option>
              <option value="compliment">Compliment</option>
              <option value="complaint">Complaint</option>
            </select>
          </div>
          <div className="flex items-center w-fit">
            <label className="text-regular-text text-grey h-fit"></label>
            <SearchableDropdown
              options={caregivers}
              value={manualName}
              onChange={(value) => handleCaregiverChange("name", value)}
              onManualEdit={(value) => handleManualEdit("name", value)}
              placeholder="Search by name"
              searchBy="name"
            />
          </div>
          <div className="flex items-center">
            <label className="text-regular-text text-grey h-fit w-fit"></label>
            <SearchableDropdown
              options={caregivers}
              value={manualId}
              onChange={(value) => handleCaregiverChange("id", value)}
              onManualEdit={(value) => handleManualEdit("id", value)}
              placeholder="Search by ID"
              searchBy="id"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            onClick={resetForm}
            className="self-end"
            variant="secondary"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="self-end"
            disabled={
              !editor?.getText() ||
              (!selectedCaregiver && !manualId && !manualName)
            }
          >
            Post
          </Button>
        </div>
      </div>
    </form>
  );
}
