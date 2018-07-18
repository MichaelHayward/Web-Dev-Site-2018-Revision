from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel

class HomePage(Page):
    body = RichTextField(blank=True)

    def get_context(self, request):
        context = super().get_context(request)
        skills = self.get_children().live().type(Skill)
        context["skills"] = skills
        return context

    content_panels = Page.content_panels + [
        FieldPanel("body", classname="full")
    ]

class Skill(Page):
    content_panels = Page.content_panels
