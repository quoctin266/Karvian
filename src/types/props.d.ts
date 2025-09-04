export {};

declare global {
  interface ICollectionProps {
    image: string;
    title: string;
  }

  interface IQualificationProps {
    icon: JSX.Element;
    title: string;
    subtitle: string;
  }

  interface IApplicationProps {
    image: string;
    title: string;
  }

  interface IValueProps {
    icon: JSX.Element;
    title: string;
    subtitle: string;
  }

  interface IMemberProps {
    image: string;
    name: string;
    position: string;
  }

  interface IProductProps {
    name: string;
    image: string;
    description: string;
    price: number;
  }

  interface IModalProps {
    open: boolean;
    setOpen: (v: boolean) => void;
  }

  interface IPulseIconProps {
    icon: React.ReactNode;

    backgroundColor: string;
  }

  interface IContactModalProps extends IModalProps {
    handleCloseMenu: () => void;
  }
}
