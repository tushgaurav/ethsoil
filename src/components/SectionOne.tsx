'use client';
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import box from '../../public/box.svg';

const SectionOne = () => {
    return (
        <div className="flex flex-row flex-wrap flex-grow justify-around align-middle items-center p-12 md:py-32 ">

            <div className="max-w-md">
                <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 border-2 border-zinc-40
          0">

                    <CardHeader className="p-4">
                        <CardTitle>Farmers</CardTitle>
                        <CardDescription className="text-wrap py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quia quo consectetur ipsa quasi incidunt itaque vero optio cupiditate ullam.</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2"> {/* Added gap-2 for spacing */}
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                    </CardFooter>
                </Card>
            </div>

            <div className="">
                {/* <Image src={box} alt="logo"/> */}
            </div>
            {/* <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}

            <div className="max-w-md">
                <Card className="bg-gradient-to-r from-zinc-800 to-zinc-900 p-4">
                    <CardHeader className="p-4">
                        <CardTitle>Companies</CardTitle>
                        <CardDescription className="text-wrap py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos repudiandae facilis iure enim inventore necessitatibus recusandae eveniet tenetur, aperiam deleniti.</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                        <Badge variant="outline">Badge</Badge>
                    </CardFooter>
                </Card>
            </div>

        </div>
    );
};

export default SectionOne;