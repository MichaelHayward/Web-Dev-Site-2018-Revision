from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

class WorkPage(Page):
    intro = models.CharField(max_length=300, blank=True)
    body = RichTextField(blank=True)
    representative_image = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )

    content_panels = Page.content_panels + [
        FieldPanel("intro", classname="full"),
        FieldPanel("body", classname="full"),
        ImageChooserPanel("representative_image"),
    ]

class MyWorkIndex(Page):
    def get_context(self, request):
        context = super().get_context(request)
        projects = self.get_children().live().type(WorkPage)
        context["projects"] = projects
        return context

    intro = models.CharField(max_length=300)

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]
