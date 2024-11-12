import Carousel from "@/components/carousel/Carousel";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: {
		absolute: 'my-next',
		template: "%s | my-next",
	},
	description: "Generated by create next app",
};

export default function ContactsPage() {
	return (
		<div className='cont'>
			<Carousel />
		</div>
	)
}
