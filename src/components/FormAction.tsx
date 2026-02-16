import { useState } from "react"
import { updateNameInDB } from "../utils"

export default function FormAction() {
    const [name, setName] = useState<string>(
        () => {
            const saved = localStorage.getItem("name");
            try {
                return saved ? JSON.parse(saved) : "Anonymous user";
            } catch {
                return "Anonymous user";
            }
        }
    )

    async function formAction(formData: FormData) {
        // formData object can get the changes depending on input name
        const entry = formData.get("name");
        
        if (typeof entry !== "string") return;

        try {
            const newName = await updateNameInDB(entry)
            setName(newName)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            } else {
                console.error("An unknown error occurred")
            }
        }
    }

    return (
        <>
            <p className="username">
                Current user: <span>{name}</span>
            </p>
            <form action={formAction}>
                <input
                    type="text"
                    name="name"
                    required
                />
                <button type="submit">Update</button>
            </form>
        </>
    )
}