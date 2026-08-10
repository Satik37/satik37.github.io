import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlertCircle, CheckCircle, SendHorizontal, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/Button';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validateField = (field: keyof FormData, value: string): string | undefined => {
  if (!value.trim()) {
    return 'This field is required.';
  }

  if (field === 'email' && !EMAIL_REGEX.test(value)) {
    return 'That email doesn\'t look right. Try something like name@example.com';
  }

  if (field === 'name' && value.trim().length < 2) {
    return 'Name should be at least 2 characters.';
  }

  if (field === 'message' && value.trim().length < 10) {
    return 'Message should be at least 10 characters so I can understand what you need.';
  }

  return undefined;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: '',
  });

  const formDataRef = useRef(formData);

  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  // Re-validate field when it changes after it's been touched
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // Validate all fields before submit
  const validateAll = useMemo(() => {
    const newErrors: FieldErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched to show errors
      setTouched({ name: true, email: true, message: true });

      const validationErrors = validateAll;
      (Object.keys(formData) as (keyof FormData)[]).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) validationErrors[field] = error;
      });

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setIsLoading(true);
      setSubmitStatus({
        type: null,
        message: '',
      });

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
          throw new Error('Missing EmailJS credentials');
        }

        const current = formDataRef.current;

        await emailjs.send(
          serviceId,
          templateId,
          {
            name: current.name,
            email: current.email,
            message: current.message,
          },
          {
            publicKey,
          }
        );

        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you as soon as possible.',
        });

        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setTouched({});
        setErrors({});
      } catch (err) {
        console.error('EmailJS error:', err);

        setSubmitStatus({
          type: 'error',
          message:
            err instanceof Error
              ? err.message
              : 'An error occurred while sending the message. Please try again later.',
        });
      } finally {
        setIsLoading(false);
      }
    },
    [formData, validateAll]
  );

  const inputBaseClass =
    'w-full px-4 py-3 pl-12 bg-surface rounded-xl border outline-none transition-all duration-300';

  const getFieldState = (field: keyof FormData) => {
    if (touched[field] && errors[field]) return 'error';
    if (touched[field] && !errors[field] && formData[field]) return 'valid';
    return 'neutral';
  };

  const fieldBorderColor = {
    neutral: 'border-border focus:border-primary focus:ring-0.5 focus:ring-primary',
    valid: 'border-green-500/40 focus:border-green-500 focus:ring-0.5 focus:ring-green-500',
    error: 'border-red-500/40 focus:border-red-500 focus:ring-0.5 focus:ring-red-500',
  };

  return (
    <section id='contact' className='py-16 md:py-24 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        {/* Background atmosphere */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
            Get In Touch
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Let's talk in more{' '}
            <span className='font-serif italic font-normal text-white'>detail</span>.
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            I like to look at products as systems: constraints, trade-offs and small decisions that
            add up over time. If you want to discuss how I approach complexity, or you see a place
            where my way of thinking could fit your team, I'm open to a conversation.
          </p>
        </div>

        {/* Contact form */}
        <div className='max-w-2xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
            <form className='space-y-6' onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Name
                </label>
                <div className='relative'>
                  <User
                    className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none'
                    aria-hidden='true'
                  />
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    autoComplete='name'
                    placeholder='Your name or nickname'
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    aria-invalid={touched.name && errors.name ? true : undefined}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`${inputBaseClass} ${fieldBorderColor[getFieldState('name')]}`}
                  />
                  {getFieldState('name') === 'valid' && (
                    <CheckCircle
                      className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none'
                      aria-hidden='true'
                    />
                  )}
                </div>
                {touched.name && errors.name && (
                  <p id='name-error' className='mt-2 text-sm text-red-500' role='alert'>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                  Email
                </label>
                <div className='relative'>
                  <Mail
                    className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none'
                    aria-hidden='true'
                  />
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    inputMode='email'
                    placeholder='name@example.com'
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    aria-invalid={touched.email && errors.email ? true : undefined}
                    aria-describedby={errors.email ? 'email-error' : 'email-hint'}
                    className={`${inputBaseClass} ${fieldBorderColor[getFieldState('email')]}`}
                  />
                  {getFieldState('email') === 'valid' && (
                    <CheckCircle
                      className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 pointer-events-none'
                      aria-hidden='true'
                    />
                  )}
                  {getFieldState('email') === 'error' && (
                    <AlertCircle
                      className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 pointer-events-none'
                      aria-hidden='true'
                    />
                  )}
                </div>
                {errors.email ? (
                  <p id='email-error' className='mt-2 text-sm text-red-500' role='alert'>
                    {errors.email}
                  </p>
                ) : (
                  <p id='email-hint' className='mt-2 text-xs text-muted-foreground'>
                    Example: name@example.com
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Message
                </label>
                <div className='relative'>
                  <MessageSquare
                    className='absolute left-4 top-5 w-5 h-5 text-muted-foreground pointer-events-none'
                    aria-hidden='true'
                  />
                  <textarea
                    id='message'
                    name='message'
                    required
                    autoComplete='off'
                    placeholder='A few lines about what brings you here'
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={touched.message && errors.message ? true : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputBaseClass} resize-none py-3 min-h-36 ${fieldBorderColor[getFieldState('message')]}`}
                    rows={6}
                  />
                </div>
                {touched.message && errors.message && (
                  <p id='message-error' className='mt-2 text-sm text-red-500' role='alert'>
                    {errors.message}
                  </p>
                )}
              </div>

              <Button className='w-full' type='submit' size='lg' disabled={isLoading}>
                {isLoading ? (
                  <>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendHorizontal className='w-5 h-5' aria-hidden='true' />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  role={submitStatus.type === 'error' ? 'alert' : 'status'}
                  aria-live={submitStatus.type === 'error' ? 'assertive' : 'polite'}
                  aria-atomic='true'
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-500'
                      : 'bg-red-500/10 border border-red-500/20 text-red-500'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className='w-5 h-5 shrink-0' aria-hidden='true' />
                  ) : (
                    <AlertCircle className='w-5 h-5 shrink-0' aria-hidden='true' />
                  )}
                  <p className='text-sm'>{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <p className='mt-6 text-sm text-muted-foreground text-center md:text-left'>
            Prefer direct email? You can also write to{' '}
            <a
              className='text-primary underline-offset-4 hover:underline'
              href='mailto:satmil@tiscali.it'
            >
              satmil@tiscali.it
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};