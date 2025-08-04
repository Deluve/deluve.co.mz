"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import { ScrollView } from "@/components/scroll-view";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GetQuotePage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center px-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">{t('getquote.success.title')}</h1>
            <p className="text-muted-foreground">{t('getquote.success.message')}</p>
          </div>
          <Button asChild className="w-full">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('getquote.success.back')}
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-20">
            <ScrollView>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('getquote.title')}
              </h1>
            </ScrollView>
            <ScrollView delay={0.1}>
              <p className="text-xl text-muted-foreground mb-2">
                {t('getquote.subtitle')}
              </p>
            </ScrollView>
            <ScrollView delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('getquote.description')}
              </p>
            </ScrollView>
          </div>

          {/* Form */}
          <ScrollView delay={0.3}>
            <Card className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  {t('getquote.form.title')}
                </h2>
                <p className="text-muted-foreground">
                  {t('getquote.description')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t('getquote.form.name')} *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('getquote.form.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('getquote.form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">{t('getquote.form.company')}</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="projectType">{t('getquote.form.projectType')} *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleInputChange('projectType', value)}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">{t('getquote.form.projectType.web')}</SelectItem>
                        <SelectItem value="mobile">{t('getquote.form.projectType.mobile')}</SelectItem>
                        <SelectItem value="ecommerce">{t('getquote.form.projectType.ecommerce')}</SelectItem>
                        <SelectItem value="other">{t('getquote.form.projectType.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">{t('getquote.form.budget')}</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => handleInputChange('budget', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">{t('getquote.form.budget.low')}</SelectItem>
                        <SelectItem value="medium">{t('getquote.form.budget.medium')}</SelectItem>
                        <SelectItem value="high">{t('getquote.form.budget.high')}</SelectItem>
                        <SelectItem value="enterprise">{t('getquote.form.budget.enterprise')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">{t('getquote.form.timeline')}</Label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) => handleInputChange('timeline', value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">{t('getquote.form.timeline.urgent')}</SelectItem>
                        <SelectItem value="standard">{t('getquote.form.timeline.standard')}</SelectItem>
                        <SelectItem value="flexible">{t('getquote.form.timeline.flexible')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <Label htmlFor="description">{t('getquote.form.description')} *</Label>
                  <Textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder={t('getquote.form.description.placeholder')}
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 text-lg"
                  >
                    {isSubmitting ? t('getquote.form.submitting') : t('getquote.form.submit')}
                  </Button>
                </div>
              </form>
            </Card>
          </ScrollView>
        </div>
      </div>
    </div>
  );
} 