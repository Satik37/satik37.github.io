import { AlertCircle, CheckCircle, Mail, SendHorizontal } from 'lucide-react';
import { Button } from '@/components/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'satmil@tiscali.it',
        href: 'mailto:satmil@tiscali.it'
    },
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // success, error
        message: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({
            type: null,
            message: ''
        })

        try {
           const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
           const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
           const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

           if (!serviceId || !templateId || !publicKey) {
            throw new Error(
                'Missing EmailJS credentials'
            );
           }
           await emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            message: formData.message,
           }, publicKey);

           setSubmitStatus({
            type: 'success',
            message: 'Message sent successfully! I will get back to you as soon as possible.'
           })
           setFormData({
            name: '',
            email: '',
            message: ''
           })
        } catch (err) {
            console.error('EmailJS error:', err);
            setSubmitStatus({
                type: 'error',
                message:
                    err.text ||'An error occurred while sending the message. Please try again later.'
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id='contact' className='py-32 relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full'>
                {/* Background atmosphere*/}
                <div
                    className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl'
                />
                <div
                    className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'
                />
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* Section header */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>
                        Get In Touch
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                        Let's talk in more{' '}
                        <span className='font-serif italic font-normal text-white'>
                            detail
                        </span>
                        .
                    </h2>
                    <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                        I like to look at products as systems: constraints, trade-offs and small decisions that add up over time. If you want to discuss how I approach complexity, or you see a place where my way of thinking could fit your team, I'm open to a conversation.
                    </p>
                </div>

                {/* Contact form */}
                <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
                        <form
                            className='space-y-6'
                            onSubmit={handleSubmit}
                        >

                           <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium mb-2'
                                >
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'              
                                    required
                                    placeholder='Your name or nickname'
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({...formData, name: e.target.value})
                                    }
                                    className='w-full px-4 py-3
                                        bg-surface rounded-xl border border-border
                                        focus:border-primary focus:ring-0.5 focus:ring-primary outline-none transition-all'
                                />
                            </div> 
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium mb-2'
                                >
                                    Email
                                </label>
                                <input
                                    id='email'
                                    name='email'
                                    type='email'   
                                    required
                                    placeholder='Best email to reply to'
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({...formData, email: e.target.value})
                                    }
                                    className='w-full px-4 py-3
                                        bg-surface rounded-xl border border-border
                                        focus:border-primary focus:ring-0.5 focus:ring-primary outline-none transition-all'
                                />
                            </div> 
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium mb-2'
                                >
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    required
                                    placeholder='A few lines about what brings you here'
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({...formData, message: e.target.value})
                                    }
                                    className='w-full px-4 py-3
                                        bg-surface rounded-xl border border-border
                                        focus:border-primary focus:ring-0.5 focus:ring-primary outline-none transition-all
                                        resize-none'
                                    rows={6}
                                />
                            </div>

                            <Button
                                className='w-full'
                                type='submit'
                                size='lg'
                                disable={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <SendHorizontal
                                            className='w-5 h-5'
                                        />
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${
                                        submitStatus.type === 'success'
                                            ? 'bg-green-500/10 border-green-500/20 text-green-500'
                                            : 'bg-red-500/10 border-red-500/20 text-red-500'
                                    }`}
                                >
                                    {submitStatus.type === 'success' ? (
                                        <CheckCircle className='w-5 h-5 shrink-0' />
                                    ) : (
                                        <AlertCircle className='w-5 h-5 shrink-0' />
                                    )}
                                    <p
                                        className='text-sm'
                                    >
                                        {submitStatus.message}
                                    </p>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        
        </section>
    )
}