import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto flex flex-col justify-center items-center">
			<h1 className="text-5xl text-blue-600 text-center font-bold mt-25 mb-5">
				Hello World! its Sabbir
			</h1>
			<Link href='/users'>
				<Button>
					See user list
				</Button>
			</Link>
			<p className="text-gray-500 mt-4">Please download <Link href='https://github.com/MD-Sabbir-Hossain-Alif/crud-server' className="text-red-500 hover:underline">crud server</Link> first</p>
		</div>
	);
}
