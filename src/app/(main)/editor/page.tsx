import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Design you resume",
};

export default function Page() {
  return <ResumeEditor />;
}
