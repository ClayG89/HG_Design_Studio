from django.urls import path, include, re_path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.FrontendAppView.as_view()), #New URL for the index route
    path('api/v1/', include('hg_design_app.urls')),
    re_path(r'^.*$', views.FrontendAppView.as_view()), #Says search frontend for all other routes, so refreshing doesn't make the deployed page error
]
