'use client';
import { faEnvelope, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, RadioGroup, TextArea, TextField, Theme } from '@radix-ui/themes';
import { redirect } from "next/navigation";  // Import the 'redirect' function
import { useState } from "react";
import OfferUpload from './OfferUpload';
import type { Offer } from "@/models/Offer";
import { saveOfferAction } from "@/app/actions/offerActions";

export default function OfferForm({orgId,offerDoc}: { orgId:string; offerDoc?:Offer }) {
    const [phoneName, setPhoneName] = useState(offerDoc?.phone || 0);
    const [qualityName, setQualityName] = useState(offerDoc?.quality || 0);
    const [colorName, setColorName] = useState(offerDoc?.color || 0);
    const [quantity, setQuantity] = useState(offerDoc?.quantity || '');
    const [price, setPrice] = useState(offerDoc?.price || '');
    const [description, setDescription] = useState(offerDoc?.description || '');

    async function handleSaveOffer(data: FormData) {
        data.set('phone', setPhoneName.toString());
        data.set('quality', setQualityName.toString());
        data.set('color', setColorName.toString());
        data.set('quantity', setQuantity.toString());
        data.set('price', setPrice.toString());
        data.set('description', setDescription.toString());
        const offerDoc = await saveOfferAction(data);
        redirect(`/offers/${offerDoc.orgId}`);
    }

    return (
        <Theme accentColor="blue">
        <form action={handleSaveOffer} className="container mt-6 flex-col gap-4" >
<div className="sm:flex">
          <div className="w-1/3">
            <h3>Product icon</h3>           
            <OfferUpload name="icon" icon={faStar} defaultValue={offerDoc?.offerIcon || ''}/>
          </div>
          <div className="grow">
            <h3>Contact person</h3>
            <div className="flex gap-2">
              <div className="">
              <OfferUpload name="contactPhoto" icon={faUser} defaultValue='' />
              </div>
              <div className="grow flex flex-col gap-1">
                <TextField.Root
                  placeholder="John Doe"
                  name="contactName"
                  defaultValue={offerDoc?.contactName || ''}>
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faUser}/>
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder="Phone"
                  type="tel"
                  name="contactPhone"
                  defaultValue={offerDoc?.contactPhone || ''}
                >
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faPhone}/>
                  </TextField.Slot>
                </TextField.Root>
                <TextField.Root
                  placeholder="Email"
                  type="email"
                  name="contactEmail"
                  defaultValue={offerDoc?.contactEmail || ''}
                >
                  <TextField.Slot>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
           
        <div className="grid mt-6 sm:grid-cols-3 gap-6 *:grow">
        <div>
            Model?
            <RadioGroup.Root defaultValue={offerDoc?.phone || 'iPhone'} name="phone" onChange={(e:any) => { setPhoneName(e.id) }}>
              <RadioGroup.Item value="iPhone 15 Pro">iPhone 15 Pro</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 15 Pro Max">iPhone 15 Pro Max</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 15">iPhone 15</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 14 Pro">iPhone 14 Pro</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 14 Pro Max">iPhone 14 Pro Max</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 14">iPhone 14</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 13 Pro">iPhone 14 Pro</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 13 Pro Max">iPhone 14 Pro Max</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 13">iPhone 14</RadioGroup.Item>
              <RadioGroup.Item value="iPhone 12">iPhone 14</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Quality?
            <RadioGroup.Root defaultValue={offerDoc?.quality || 'A+'} name="quality" onChange={(e:any) => { setQualityName(e.id) }}>
              <RadioGroup.Item value="A+">A+</RadioGroup.Item>
              <RadioGroup.Item value="A">A</RadioGroup.Item>
              <RadioGroup.Item value="B+">B+</RadioGroup.Item>
              <RadioGroup.Item value="B">B</RadioGroup.Item>
              <RadioGroup.Item value="C+">C+</RadioGroup.Item>
              <RadioGroup.Item value="C">C</RadioGroup.Item>
            </RadioGroup.Root>
          </div>

          <div>
            Color?
            <RadioGroup.Root defaultValue={offerDoc?.color || 'black'} name="color" onChange={(e:any) => { setColorName(e.id) }}>
              <RadioGroup.Item value="black">black</RadioGroup.Item>
              <RadioGroup.Item value="blue">blue</RadioGroup.Item>
              <RadioGroup.Item value="green">green</RadioGroup.Item>
              <RadioGroup.Item value="yellow">yellow</RadioGroup.Item>
              <RadioGroup.Item value="pink">pink</RadioGroup.Item>
            </RadioGroup.Root>
          </div>

             <div>
         Quantity ?
         <TextField.Root name={offerDoc?.quantity || '10'} defaultValue="10">
           <TextField.Slot>
             pieces
          </TextField.Slot>
                 </TextField.Root>
             </div>

             <div>
         Price ?
         <TextField.Root name={offerDoc?.price || '500'} defaultValue="500">
           <TextField.Slot>
           €
          </TextField.Slot>
                 </TextField.Root>
             </div>
           </div>

           <TextArea
       className="mt-6"
       defaultValue={offerDoc?.description || ''}
       placeholder="Offer description"
       resize="vertical"
       name="description" />
      <div className="flex mt-6 justify-center">
       <Button size="3">
         <span className="px-8">Save</span>
            </Button>
           </div>
          </form>
           </Theme>
    )
}