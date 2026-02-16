export function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms;
  while(Date.now() < wakeUpTime) {}
}

export async function updateNameInDB(newName: string) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    if (newName.toLowerCase().includes("error")) {
        throw new Error("Failed to update name")
    }
    localStorage.setItem("name", JSON.stringify(newName))
    return newName
}
