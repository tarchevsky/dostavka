import ContactFormPlus from "@/components/contactFormPlus/ContactFormPlus";
import Image from "next/image";
import {deliveryForm} from "@/data/delivery-form";

const Map = () => {
    const serializedFields = JSON.parse(JSON.stringify(deliveryForm));
    return (
        <div className='cont grid grid-cols-[800px_auto] gap-10 my-10'>
            <Image src='/map.png' alt='карта зон доставки' width={500} height={500} className='w-full h-full' />
            <ContactFormPlus
                title="Контактная форма"
                fields={serializedFields}
                storageKey="myCustomFormData"
            />
        </div>
    )
}

export default Map