"use client";

import { useTransition } from "react";
import { CityWithAddresses } from "@/entities/city";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Separator } from "@/shared/ui/separator";
import { Textarea } from "@/shared/ui/textarea";
import { createQuestAction } from "../actions";
import { useQuestForm } from "../model";
import { ImageSelectorLayout } from "./image-selector-layout";

export function CreateQuestForm({
  cities,
  revalidatePagePath,
}: {
  cities: CityWithAddresses[];
  revalidatePagePath: string[];
}) {
  const defaultValues = {
    name: "",
    uniqueName: "",
    addressId: 0,
    basePrice: 0,
    duration: 0,
    fearLevel: 0,
    personFrom: 0,
    personTo: 0,
    photos: "",
    isActive: false,

    title: "",
    description: "",
    h1: "",
    content: "",
  };

  const form = useQuestForm(defaultValues);

  const [isCreateTransition, startCreateTransition] = useTransition();

  const changeImages = (images: string) => form.setValue("photos", images);

  const locations = cities.flatMap((city) =>
    city.addresses.map((address) => ({
      id: address.id,
      location: `${city.name} ${address.place}`,
    })),
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Quest</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              startCreateTransition(async () => {
                await createQuestAction(data, revalidatePagePath);
                form.reset();
              });
            })}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="uniqueName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest unique name</FormLabel>
                  <FormControl>
                    <Input placeholder="unique name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="addressId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Адрес</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={`${location.id}`}>
                          {location.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="basePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest price</FormLabel>
                  <FormControl>
                    <Input placeholder="basePrice" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest duration</FormLabel>
                  <FormControl>
                    <Input placeholder="duration" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fearLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest fear level</FormLabel>
                  <FormControl>
                    <Input placeholder="fearLevel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest person from</FormLabel>
                  <FormControl>
                    <Input placeholder="personFrom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest person to</FormLabel>
                  <FormControl>
                    <Input placeholder="personTo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Изображения</FormLabel>

                  <ImageSelectorLayout
                    images={[]}
                    changeImages={changeImages}
                  />

                  <FormControl>
                    <Input className="hidden" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Открыть для записи</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest page title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest page description</FormLabel>
                  <FormControl>
                    <Input placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="h1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest page h1</FormLabel>
                  <FormControl>
                    <Input placeholder="h1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quest page content</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="start type content"
                      rows={10}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isCreateTransition}>
              Create
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
