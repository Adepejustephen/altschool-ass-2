
import './button.css'

export const Button = ({ children, onClick, pagebtn, disabled }) => {
  return (
    <>
      {pagebtn ? (
        <button className="btn-page" onClick={onClick} disabled={disabled}>
          {children}
        </button>
      ) : (
        <button className="btn" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
