"use client";

import { toast } from "react-toastify";
import { MdContentCopy } from "react-icons/md";

import Headline1 from "@/components/atoms/typography/Headline1";

interface ContactDetailProps {
  contact: string;
}

const ContactDetail = ({ contact }: ContactDetailProps) => {
  const handleCopy = (): void => {
    navigator.clipboard.writeText(contact);

    toast.success("연락처가 복사되었습니다.");
  };

  return (
    <div className="flex items-center gap-1">
      <Headline1 text={contact} />

      <MdContentCopy className="cursor-pointer" onClick={handleCopy} />
    </div>
  );
};

export default ContactDetail;
