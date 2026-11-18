export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>Celine Sitina, {new Date().getFullYear()}</span>
        <span>All brands shown are fictional demos. Payments run in Stripe test mode. Currently learning Builder.io.</span>
      </div>
    </footer>
  );
}
