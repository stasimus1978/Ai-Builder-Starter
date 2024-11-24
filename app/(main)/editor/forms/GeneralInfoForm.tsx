import { generalInfoSchema, GeneralInfoValues } from "@/libs/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/react/ui/form";
import { Input } from "@/react/ui/input";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Загальна інформація</h2>
        <p className="text-sm text-muted-foreground">
          Це не з’явиться у вашому резюме
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Назва проекту</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Моє круте резюме" autoFocus />
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
                <FormLabel>Опис</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Резюме для моєї наступної роботи"
                  />
                </FormControl>
                <FormDescription>Опишіть, для чого це резюме.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
