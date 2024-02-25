import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import HLine from "./ui/hline";

const LineWithCards = () => {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-center px-16 mb-40 mx-auto mt-40">
      <div className="max-w-md relative">
        <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 border-2 border-zinc-400">
          <CardHeader className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <Image src={"/cr.png"} width={80} height={60} alt="line" />
              <CardTitle>Crop Residues</CardTitle>
            </div>
            <HLine />
            <CardDescription className="text-wrap py-4">
              Diverse range of crop residues we manage.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-wrap gap-2 px-3">
            <Badge variant="outline">Wheat Straw</Badge>
            <Badge variant="outline">Rice Straw</Badge>
            <Badge variant="outline">Sugarcane Bagasse</Badge>
          </CardFooter>
        </Card>
      </div>

      {/* Dashed line with image */}
      <div className="relative   w-full">
        <div className="flex items-center">
          <div className="hidden  md:block flex-1 border-dashed border-t-2 border-gray-200"></div>
          <div className="m-auto">
            <div
              className="md:hidden z-99 border-2-2 absolute border-dashed border-white h-full border"
              style={{
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
                zIndex: -1,
              }}
            ></div>
            <Image
              className="m-auto my-16 md:m-0 "
              src={"/logo-nt.png"}
              width={100}
              height={80}
              alt="line"
            />
          </div>
          <div className="hidden  md:block flex-1 border-dashed border-t-2 border-gray-200"></div>
        </div>
      </div>

      <div className="max-w-md relative">
        <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 border-2 border-zinc-400">
          <CardHeader className="p-4">
            <div className="flex items-center gap-4 mb-4">
              <Image src={"/industry.png"} width={80} height={60} alt="line" />
              <CardTitle>Industries</CardTitle>
            </div>
            <HLine />
            <CardDescription className="text-wrap py-2">
              Industries we supply aggriculture residues to for sustainable
              solutions.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-wrap gap-2 px-3">
            <Badge variant="outline">Maize Stover</Badge>
            <Badge variant="outline">Packaging</Badge>
            <Badge variant="outline">Animal Feed</Badge>
            <Badge variant="outline">Biofuel</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LineWithCards;
