import React, { useState } from "react";

/**
 * ApplyModal Component
 * --------------------
 * Interactive application popup modal for prospective Campus Ambassadors.
 * 
 * Props:
 * - isOpen (boolean): controls modal visibility
 * - onClose (function): callback when user closes the modal
 * - onSubmitSuccess (function, optional): custom handler for backend integration
 */
export default function ApplyModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    city: "",
    yearOfStudy: "1st Year",
    degreeBranch: "",
    socialProfile: "",
    statement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.college.trim()) {
      setErrorMessage("Please fill out all required fields marked with *.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // If external onSubmitSuccess prop is provided by future developers, call it
      if (onSubmitSuccess) {
        await onSubmitSuccess(formData);
      } else {
        // Default mock submission delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || "An error occurred while submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      city: "",
      yearOfStudy: "1st Year",
      degreeBranch: "",
      socialProfile: "",
      statement: "",
    });
    onClose();
  };

  return (
    <div className="ca-modal-overlay" onClick={handleResetAndClose}>
      <div
        className="ca-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="ca-modal-close-btn"
          onClick={handleResetAndClose}
          aria-label="Close application modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="ca-modal-success">
            <div className="ca-success-icon">✦</div>
            <h2 className="ca-success-title">APPLICATION SUBMITTED!</h2>
            <p className="ca-success-desc">
              Thank you, <strong style={{ color: "#fff" }}>{formData.fullName}</strong>. Your application to become an Elan & ηVision Campus Ambassador has been received. Our core outreach team will review your profile and contact you on WhatsApp/Email.
            </p>
            <button className="ca-btn ca-btn-primary" onClick={handleResetAndClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="ca-modal-header">
              <span className="ca-modal-eyebrow">ELAN & nVISION · AMBASSADOR APPLICATION</span>
              <h2 className="ca-modal-title">Join the Movement</h2>
              <p className="ca-modal-subtitle">
                Fill out your details below. Selection is rolling, so apply early to secure your college's ambassadorship.
              </p>
            </div>

            {errorMessage && <div className="ca-form-error">{errorMessage}</div>}

            <form className="ca-modal-form" onSubmit={handleSubmit}>
              <div className="ca-form-grid">
                <div className="ca-input-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Aditi Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="ca-input-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="ca-input-group">
                  <label htmlFor="phone">WhatsApp Mobile Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="ca-input-group">
                  <label htmlFor="college">College / University Name *</label>
                  <input
                    id="college"
                    type="text"
                    name="college"
                    required
                    placeholder="e.g. NIT Warangal, OU, etc."
                    value={formData.college}
                    onChange={handleChange}
                  />
                </div>

                <div className="ca-input-group">
                  <label htmlFor="city">City & State *</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Hyderabad, Telangana"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="ca-input-group">
                  <label htmlFor="yearOfStudy">Year of Study</label>
                  <select
                    id="yearOfStudy"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Postgraduate / Other">Postgraduate / Other</option>
                  </select>
                </div>
              </div>

              <div className="ca-input-group" style={{ marginTop: "1rem" }}>
                <label htmlFor="socialProfile">Instagram / LinkedIn Profile URL</label>
                <input
                  id="socialProfile"
                  type="text"
                  name="socialProfile"
                  placeholder="https://instagram.com/your_handle or linkedin.com/in/..."
                  value={formData.socialProfile}
                  onChange={handleChange}
                />
              </div>

              <div className="ca-input-group" style={{ marginTop: "1rem" }}>
                <label htmlFor="statement">Why do you want to represent Elan & ηVision? (Optional)</label>
                <textarea
                  id="statement"
                  name="statement"
                  rows="3"
                  placeholder="Tell us about any past club activities, outreach zeal, or ideas you have..."
                  value={formData.statement}
                  onChange={handleChange}
                />
              </div>

              <div className="ca-modal-footer">
                <button
                  type="button"
                  className="ca-btn ca-btn-ghost"
                  onClick={handleResetAndClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ca-btn ca-btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application →"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
