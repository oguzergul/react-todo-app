export const Form = ({action, children}) => {
    return (
        <form
            action={action}
            className="w-full flex bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 rounded-xl" >
            {children}
        </form>
    )
}
