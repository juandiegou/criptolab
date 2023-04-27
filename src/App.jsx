import "./App.css";
import { useData } from "./hooks";
import { decryptMessageService } from "./service";

function App() {
	const data = {
		encryptedMessage: "",
		decryptedMessage: "",
	};
	const {
		encryptedMessage,
		decryptedMessage,
		onInputChange,
		change,
		onResetData,
	} = useData(data);

	const decryptMessage = () => {
		if (encryptedMessage.length > 0) {
			const message = decryptMessageService(encryptedMessage,change);
      
			change("decryptedMessage", message);
		}
	};

	return (
		<div className='container mx-auto'>
			<h1 className="text-6xl font-bold pb-12">Beta lab Cripto</h1>
			<hr />
			<div className="grid grid-cols-2 gap-8 my-16">
				<div>
					<label
						htmlFor="encryptedMessage"
						className="block mb-2 pb-4 text-3xl font-bold  text-gray-900 dark:text-white"
					>
						Encrypted Message
					</label>
					<textarea
						value={encryptedMessage}
						onChange={onInputChange}
						onKeyDown={(e) => (e.code === "Enter" ? decryptMessage() : {})}
						name="encryptedMessage"
						id="encryptedMessage"
						rows="14"
						className="block p-2.5 w-full  text-2xl resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Write the encrypted message..."
					/>
				</div>
				<div>
					<label
						htmlFor="decryptedMessage"
						className="block mb-2  pb-4 text-3xl font-bold  text-gray-900 dark:text-white"
					>
						Decrypted Message
					</label>
					<textarea
						value={decryptedMessage}
						name="decryptedMessage"
						disabled={true}
						id="decryptedMessage"
						rows="14"
						className="block  resize-none p-2.5 w-full  text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Decrypted message..."
					/>
				</div>
			</div>
			<button
				type="button"
				onClick={decryptMessage}
				className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  px-5 py-2.5  text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 text-2xl font-bold "
			>
				Decrypt Message
			</button>
			<button
				type="button"
				onClick={onResetData}
				className=" mx-40 text-2xl font-bold text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full px-5 py-2.5 text-center  mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
			>
				Clear
			</button>
		</div>
	);
}

export default App;
