export interface Props {
  children: React.ReactNode;
}

export interface FlexProps {
  direction?: string;
  justify?: string;
  align?: string;
  margin?: string;
  wrap?: string;
  gap?: string;
  children: React.ReactNode;
}

export interface FormData {
  status: string;
  type: string;
  gender: string;
  species: string;
  name: string;
}

export interface FormProps {
    onSubmit: (formData: FormData) => Promise<void>;
}
