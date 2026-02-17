import { useActionState, useOptimistic } from "react"
import { updateNameInDB } from "../utils"
interface FormState {
    name: string;
    error: Error | null;
}

export default function FormAction() {
    const [state, actionFunction, isPending] = useActionState<FormState, FormData>(
        updateName,
        {
            error: null,
            name: JSON.parse(localStorage.getItem("name") || '"Anonymous user"')
        }
    )
    const[optimisticName, setOptimisticName]= useOptimistic(state.name)
    async function updateName(prevState: FormState, formData: FormData): Promise<FormState> {
        const nameValue = formData.get("name");
        setOptimisticName(String(nameValue))
        try {
            if (typeof nameValue !== "string") {
                return { ...prevState, error: new Error("Invalid name") };
            }

            const newName = await updateNameInDB(nameValue)
            return { name: newName, error: null }
        } catch (error) {
            return { 
                error: error instanceof Error ? error : new Error("Unknown error"), 
                name: prevState.name 
            }
        }
    }

    return (
        <>
            <p className="username">
                Current user: <span>{optimisticName}</span>
            </p>

            {isPending && <p>Loading...</p>}

            <form action={actionFunction}>
                <input
                    type="text"
                    name="name"
                    required
                />
                <button type="submit" disabled={isPending}>Update</button>
                {!isPending && state.error && (
                    <p className="error">{state.error.message}</p>
                )}
            </form>
        </>
    )
}