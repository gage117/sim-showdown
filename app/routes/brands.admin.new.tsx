import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useNavigation
} from "@remix-run/react"

import { createBrand } from "~/models/brand.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  const errors = {
    name: name ? null : "Name is required",
    slug: slug ? null : "Slug is required"
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json(errors);
  }

  await createBrand({ name, slug });

  return redirect("/brands/admin");
}

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewBrand() {
  const errors = useActionData();

  const { state } = useNavigation();
  const isCreating = state === "submitting";

  return (
    <Form method="post">
      <p>
        <label>
          Brand Name:{" "}
          {errors?.name ? (
            <em className="text-red-600">{errors.name}</em>
          ) : null}
          <input
            type="text"
            name="name"
            className={inputClassName}
          />
        </label>
      </p>
      <p>
        <label>
          Brand Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            type="text"
            name="slug"
            className={inputClassName}
          />
        </label>
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          { isCreating ? "Creating..." : "Create Brand"}
        </button>
      </p>
    </Form>
  );
}