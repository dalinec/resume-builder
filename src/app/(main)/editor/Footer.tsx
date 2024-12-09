import { Button } from "@/components/ui/button";
import { FileUserIcon, Link, PenLineIcon } from "lucide-react";
import { steps } from "./steps";
import { cn } from "@/lib/utils";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  showSmResumePreview: boolean;
  setShowSmResumePreview: (show: boolean) => void;
  isSaving: boolean;
}

export default function Footer({
  currentStep,
  setCurrentStep,
  setShowSmResumePreview,
  showSmResumePreview,
  isSaving,
}: FooterProps) {
  //prev and next logic
  const currentIndex = steps.findIndex((step) => step.key === currentStep);
  const previousStep = steps[currentIndex - 1]?.key;
  const nextStep = steps[currentIndex + 1]?.key;

  return (
    <footer className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button
            onClick={
              previousStep ? () => setCurrentStep(previousStep) : undefined
            }
            variant={"secondary"}
            disabled={!previousStep}
          >
            Previous
          </Button>
          <Button
            onClick={nextStep ? () => setCurrentStep(nextStep) : undefined}
            variant={"default"}
            disabled={!nextStep}
          >
            Next
          </Button>
        </div>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setShowSmResumePreview(!showSmResumePreview)}
          className="md:hidden"
          title={
            showSmResumePreview ? "Show input form" : "Show resume preview"
          }
        >
          {showSmResumePreview ? <PenLineIcon /> : <FileUserIcon />}
        </Button>
        <div className="flex items-center gap-3">
          <Button variant={"secondary"} asChild>
            <Link href={"/resumes"}>Close</Link>
          </Button>
          <p
            className={cn(
              "text-muted-foreground opacity-0 transition-opacity",
              isSaving && "opacity-100",
            )}
          >
            Saving...
          </p>
        </div>
      </div>
    </footer>
  );
}
