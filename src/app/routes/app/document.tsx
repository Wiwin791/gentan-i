'use client';

import {
  Download,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  TableRowsSplit,
} from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Document {
  id: number;
  documentNo: string;
  title: string;
  status: 'Active' | 'Draft';
  createdDate: string;
  changedBy: string;
  changeDate: string;
}

export const DocumentTable = () => {
  const documents: Document[] = [
    {
      id: 1,
      documentNo: 'IT/QA/DOC/000001',
      title: 'System Type-1',
      status: 'Draft',
      createdDate: '07 Dec 2023',
      changedBy: 'Admin',
      changeDate: '20 Dec 2023',
    },
    {
      id: 2,
      documentNo: 'IT/QA/DOC/000002',
      title: 'System Type-1',
      status: 'Draft',
      createdDate: '07 Dec 2023',
      changedBy: 'Admin',
      changeDate: '20 Dec 2023',
    },
    // Add more sample data as needed
  ];

  return (
    <div className="p-6">
      <div className="mb-6 text-xl font-semibold">SW Document</div>

      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Plant" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="plant1">Plant 1</SelectItem>
            <SelectItem value="plant2">Plant 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Division" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="div1">Division 1</SelectItem>
            <SelectItem value="div2">Division 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dept1">Department 1</SelectItem>
            <SelectItem value="dept2">Department 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="section1">Section 1</SelectItem>
            <SelectItem value="section2">Section 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Line" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="line1">Line 1</SelectItem>
            <SelectItem value="line2">Line 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Download Button */}

      <div className="mb-4 flex justify-end">
        <Button variant="destructive">
          <Download className="mr-2 size-4" />
          Download
        </Button>
      </div>

      {/* Table */}

      <div className="rounded-lg border">
        <TableRow>
          <TableHeader className="flex-1 items-center justify-between px-2 py-4">
            <TableRow>
              <TableHead className="w-[50px]">No</TableHead>
              <TableHead>Document No</TableHead>
              <TableHead>Document Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Changed By</TableHead>
              <TableHead>Change Date</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.id}</TableCell>
                <TableCell>{doc.documentNo}</TableCell>
                <TableCell>{doc.title}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    {doc.status}
                  </span>
                </TableCell>
                <TableCell>{doc.createdDate}</TableCell>
                <TableCell>{doc.changedBy}</TableCell>
                <TableCell>{doc.changeDate}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableRow>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-4">
        <Button variant="outline" size="icon">
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-700">2 of 10</span>
        </div>
        <Button variant="outline" size="icon">
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};
