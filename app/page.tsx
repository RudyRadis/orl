import { AppTitle } from "@/components/AppTitle"
import { FaBook } from 'react-icons/fa'

export default function Home() {
	return (
		<>
			<AppTitle />
			<div className="flex justify-center">
				<FaBook className="text-9xl" color="#FF7900" />
			</div>
		</>
	)
}
