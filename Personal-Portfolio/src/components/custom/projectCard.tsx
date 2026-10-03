import { Button } from "../ui/button";
// import { Badge } from "../ui/badge";
import {
  Card,
  // CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SpotlightCard from "../SpotlightCard";

export interface ProjectDetails {
  id?: number;
  heading: string;
  description: string;
  imageSrc: string;
  gitHubLink: string;
}

const ProjectCard = ({
  heading,
  description,
  imageSrc,
  gitHubLink,
}: ProjectDetails) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <Card className="relative w-full pt-0 flex flex-col h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl ring-0">
        {/* Screen bezel frame */}
        <div className="p-3 pb-2 rounded-t-xl">
          <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-inner">
            <img
              src={imageSrc}
              alt="Event cover"
              className="aspect-video w-full object-cover"
            />
          </div>
          {/* Webcam dot — monitor aesthetic */}
          <div className="flex justify-center mt-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
        <CardHeader className="grow">
          {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
          <CardTitle className="text-white">{heading}</CardTitle>
          <CardDescription className="text-white/70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button asChild className="w-full cursor-pointer bg-brand-orange">
            <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
              View in GitHub
            </a>
          </Button>
        </CardFooter>
      </Card>
    </SpotlightCard>
  );
};

export default ProjectCard;
