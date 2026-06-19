import {Button} from "./Button.tsx";

export function TopBar() {
    return (
        <div className="fixed w-full flex justify-between bg-black">
            <div>
                <p className="text-gray-500 p-5 text-sm">~/rahimi-ayob</p>
            </div>
            <div className="mx-2">
                <Button> Home </Button>
                <Button> About </Button>
                <Button> Skills </Button>
                <Button> Projects </Button>
                <Button> Journey </Button>
                <Button> Contact </Button>
            </div>
        </div>
    )
}