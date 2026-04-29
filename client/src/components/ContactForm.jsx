import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6)
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setForm({
        ...form,
        phone: formatPhone(value),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const cleanPhone = form.phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      setStatus("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          phone: cleanPhone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || "Something went wrong.");
        return;
      }

      setStatus(data.message || "Request submitted successfully.");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        insuranceType: "",
        message: "",
      });
    } catch (error) {
      setStatus("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-950">
            Get in Touch
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-gray-500">
            Ready to protect what matters most? Contact us today for a free quote
            or to learn more about our services.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <FiPhone className="mt-1 text-2xl text-gray-950" />
              <div>
                <p className="font-bold text-gray-950">Phone</p>
                <p className="mt-2 text-gray-500">1(270) 298-8100</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiMail className="mt-1 text-2xl text-gray-950" />
              <div>
                <p className="font-bold text-gray-950">Email</p>
                <p className="mt-2 text-gray-500">doubleainsurance@yahoo.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiMapPin className="mt-1 text-2xl text-gray-950" />
              <div>
                <p className="font-bold text-gray-950">Address</p>
                <p className="mt-2 text-gray-500">
                  106 S Main St,<br />
                  Morgantown, Kentucky<br />
                  42261
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-950">Request a Quote</h3>

          <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
                required
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
                required
              />
            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
              required
            />

           <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              inputMode="numeric"
              autoComplete="tel"
              maxLength={14}
              className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
              required
            />

            <select
              name="insuranceType"
              value={form.insuranceType}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
              required
            >
              <option value="" disabled>Select Insurance Type</option>
              <option value="Auto & Home Insurance">Auto & Home Insurance</option>
              <option value="Medicare Options">Medicare Options</option>
              <option value="Health Insurance">Health Insurance</option>
              <option value="Life Insurance">Life Insurance</option>
              <option value="Business Insurance">Business Insurance</option>
              <option value="Group Plans">Group Plans</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your insurance needs..."
              rows="5"
              className="rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-gray-950"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#050514] px-6 py-3 font-semibold text-white transition hover:bg-black disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {status && (
              <p className="text-sm font-medium text-gray-900">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;