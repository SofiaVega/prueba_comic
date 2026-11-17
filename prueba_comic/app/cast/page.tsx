import NavBar from "../comic/navBar"

export default function Cast(){
    return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}> Titulo </h1>
        <NavBar/>
        <p>Hello world</p>
    </div>
)
}