

export const appendFormData = (formData: FormData , key: string, value: string | File | undefined ) => {

    if (value !== undefined && value !== null) {
        formData.append(key, value);
    }
};