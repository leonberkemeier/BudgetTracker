from django import forms
from .models import ExpensesItem, Purpose


class ExpensesForm(forms.ModelForm):
    class Meta:
        model = ExpensesItem
        fields = ('__all__')

    purpose=forms.models.ModelChoiceField(queryset=Purpose.objects.all())
    date=forms.DateField(
        widget=forms.DateInput(
            attrs={
                'class':'form-control',
                'type':'date'
            }
        ),
        initial='2008-08-02'   
    )

class PurposeForm(forms.ModelForm):
    class Meta:
        model = Purpose
        fields = ('__all__')
