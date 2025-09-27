"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles, Send } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

interface FormData {
  name: string
  email: string
  portfolio: string
  category: string
  pitch: string
}

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>()

  const selectedCategory = watch("category")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-6">Application Submitted!</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Thank you for your interest in joining our team. We'll review your application and get back to you within
            5-7 business days.
          </p>
          <motion.div className="space-y-4" variants={staggerContainer} initial="initial" animate="animate">
            <motion.p variants={fadeInUp} className="text-purple-300">
              ✨ Your application has been received
            </motion.p>
            <motion.p variants={fadeInUp} className="text-purple-300">
              📧 Confirmation email sent
            </motion.p>
            <motion.p variants={fadeInUp} className="text-purple-300">
              🚀 Our team will review your submission
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Apply
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Now
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our team? Fill out the application below and take the first step towards an exciting career
              in marketing innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Card className="p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-900">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="mt-2 h-12 text-lg"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-900">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="mt-2 h-12 text-lg"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="portfolio" className="text-lg font-semibold text-gray-900">
                      Portfolio/LinkedIn URL *
                    </Label>
                    <Input
                      id="portfolio"
                      {...register("portfolio", { required: "Portfolio/LinkedIn URL is required" })}
                      className="mt-2 h-12 text-lg"
                      placeholder="https://your-portfolio.com"
                    />
                    {errors.portfolio && (
                      <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {errors.portfolio.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Label htmlFor="category" className="text-lg font-semibold text-gray-900">
                      Talent Category *
                    </Label>
                    <Select onValueChange={(value) => setValue("category", value)}>
                      <SelectTrigger className="mt-2 h-12 text-lg">
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="designer">Creative Designer</SelectItem>
                        <SelectItem value="writer">Content Writer</SelectItem>
                        <SelectItem value="strategist">Digital Strategist</SelectItem>
                        <SelectItem value="influencer">Social Media Influencer</SelectItem>
                        <SelectItem value="performance">Performance Marketer</SelectItem>
                        <SelectItem value="innovator">Digital Innovator</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.category && (
                      <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        Category is required
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <Label htmlFor="pitch" className="text-lg font-semibold text-gray-900">
                    Personal Pitch *
                  </Label>
                  <p className="text-gray-600 text-sm mt-1 mb-2">
                    Tell us about yourself, your experience, and why you'd be a great fit for our team (max 500 words)
                  </p>
                  <Textarea
                    id="pitch"
                    {...register("pitch", {
                      required: "Personal pitch is required",
                      maxLength: {
                        value: 500,
                        message: "Pitch must be less than 500 words",
                      },
                    })}
                    className="mt-2 min-h-32 text-lg"
                    placeholder="Share your story, passion, and what makes you unique..."
                  />
                  {errors.pitch && (
                    <motion.p className="text-red-500 text-sm mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {errors.pitch.message}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Submitting...
                      </motion.div>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
