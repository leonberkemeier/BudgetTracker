from django import forms
from .models import ExpensesItem


class ExpensesForm(forms.ModelForm):
    class Meta:
        model = ExpensesItem
        fields = ('__all__')

    date=forms.DateField(
        widget=forms.DateInput(
            attrs={
                'class':'form-control',
                'type':'date'
            }
        ),
        initial='2008-08-02'   
    )