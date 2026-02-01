import Button from '../components/common/Button';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Acceso Nuna</h1>
        <p>
          Este acceso está en preparación. Si deseas una cuenta corporativa o una demo privada,
          escríbenos y te enviamos una invitación.
        </p>
        <Button onClick={() => window.history.back()} variant="secondary">
          Volver
        </Button>
      </div>
    </div>
  );
}
