from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

class BlogPost(Page):
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
        ImageChooserPanel("representative_image"),
        FieldPanel("body", classname="full"),
    ]

class BlogIndex(Page):
    def get_context(self, request):
        context = super().get_context(request)
        blogposts = self.get_children().live().type(BlogPost).order_by("-first_published_at");
        context["blogposts"] = blogposts
        return context

    intro = models.CharField(max_length=300)

    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]
