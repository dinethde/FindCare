"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { generateNextCaregiverId } from "@/data/add-caregiver-form"
import Papa from "papaparse"

// Define required headers for CSV file
const REQUIRED_HEADERS = [
  "Name",
  "Tagline",
  "About",
  "Total Clients",
  "Years of Excellence",
  "Live In",
  "Email",
  "Password",
  "Caregiver Specificity",
  "Key Features",
  "General Features",
]

interface CsvRow {
  [key: string]: string
}

interface UploadSummary {
  totalRows: number
  successfulRows: number
  failedRows: number
}

/**
 * BulkUpload component for uploading multiple caregivers via CSV
 * @returns {JSX.Element} The rendered BulkUpload component
 */
export function BulkUpload(): JSX.Element {
  const [csvData, setCsvData] = useState<CsvRow[]>([])
  const [errors, setErrors] = useState<string[]>([])
  const [uploadSummary, setUploadSummary] = useState<UploadSummary | null>(null)

  /**
   * Validates the CSV data
   * @param {CsvRow[]} data - The CSV data to validate
   * @returns {boolean} Whether the data is valid
   */
  const validateCsvData = useCallback((data: CsvRow[]): boolean => {
    const headers = Object.keys(data[0])
    const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header))

    if (missingHeaders.length > 0) {
      setErrors([`Missing required headers: ${missingHeaders.join(", ")}`])
      return false
    }

    const newErrors: string[] = []
    data.forEach((row, index) => {
      if (!row.Name || row.Name.trim() === "") {
        newErrors.push(`Row ${index + 1}: Name is required`)
      }
      if (!row.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.Email)) {
        newErrors.push(`Row ${index + 1}: Invalid email address`)
      }
      if (!row.Password || row.Password.length < 8) {
        newErrors.push(`Row ${index + 1}: Password must be at least 8 characters long`)
      }
      // Add more validations as needed
    })

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return false
    }

    return true
  }, [])

  /**
   * Handles file drop event
   * @param {File[]} acceptedFiles - The accepted files
   * @returns {void}
   */
  const onDrop = useCallback(
    (acceptedFiles: File[]): void => {
      const file = acceptedFiles[0]
      Papa.parse(file, {
        complete: (result) => {
          const parsedData = result.data as CsvRow[]
          if (validateCsvData(parsedData)) {
            setCsvData(parsedData)
            setErrors([])
          }
        },
        header: true,
        skipEmptyLines: true,
      })
    },
    [validateCsvData],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { "text/csv": [".csv"] } })

  /**
   * Handles the upload process
   * @returns {void}
   */
  const handleUpload = (): void => {
    let successfulRows = 0
    let failedRows = 0

    csvData.forEach((row, index) => {
      try {
        const caregiverId = generateNextCaregiverId()
        // Here you would typically send the data to your backend
        // For now, we'll just log it
        console.log("Uploading caregiver:", { ...row, caregiverId })
        successfulRows++
      } catch (error) {
        console.error(`Error uploading row ${index + 1}:`, error)
        failedRows++
      }
    })

    setUploadSummary({
      totalRows: csvData.length,
      successfulRows,
      failedRows,
    })
  }

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the CSV file here ...</p>
        ) : (
          <p>Drag 'n' drop a CSV file here, or click to select one</p>
        )}
      </div>

      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertTitle>Errors in CSV file</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-4">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {csvData.length > 0 && (
        <>
          <h3 className="text-lg font-semibold">Preview (first 5 rows)</h3>
          <Table>
            <TableHeader>
              <TableRow>
                {REQUIRED_HEADERS.map((header) => (
                  <TableHead key={header}>{header}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {csvData.slice(0, 5).map((row, index) => (
                <TableRow key={index}>
                  {REQUIRED_HEADERS.map((header) => (
                    <TableCell key={header}>{row[header]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={handleUpload}>Upload {csvData.length} records</Button>
        </>
      )}

      {uploadSummary && (
        <Alert>
          <AlertTitle>Upload Summary</AlertTitle>
          <AlertDescription>
            Total rows: {uploadSummary.totalRows}
            <br />
            Successfully uploaded: {uploadSummary.successfulRows}
            <br />
            Failed to upload: {uploadSummary.failedRows}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

