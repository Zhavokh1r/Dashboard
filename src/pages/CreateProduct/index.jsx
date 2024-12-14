import { Input } from "@material-tailwind/react";

export default function CreateProducts(){
    return <div>
        <h1>Create Product!</h1>
        <div className="inputs">
            <Input placeholder="Product Uzbek name" />
            <Input placeholder="Product Russian name" />
            <Input placeholder="Product English name" />
        </div>
    </div>
}