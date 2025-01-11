import Alert from "../Alert";

type Props = {
  children: string;
  onClick: () => void;
};
export const Button = ({ children, onClick }: Props) => {
  return (
    <>
      <div>
        <button type="button" className="btn btn-primary" onClick={onClick}>
          {children}
        </button>
      </div>
    </>
  );
};
