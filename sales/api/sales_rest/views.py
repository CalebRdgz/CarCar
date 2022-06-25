from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, PotentialCustomer, SalesPerson, SalesRecord


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
        ]

class CustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name", 
        "address", 
        "phone_number", 
        "id",
        ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
        "id",
    ]
    
class SalesRecordListEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sales_person",
        "customer",
        "sales_price"
        "id",
    ]
    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {"vin": o.automobile.vin}


@require_http_methods(["GET", "POST"])
def api_list_sales_record(request, sales_person_vo_id = None):
    if request.method == "GET":
        if sales_person_vo_id is not None:
            sales_records = SalesRecord.objects.filter(sales_person = sales_person_vo_id)
        else:
            sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        # Get the Conference object and put it in the content dict
        try:
            automobile = AutomobileVO.objects.get(href = content["automobile"])
            if automobile.sold == True:
                return JsonResponse(
                    {"message": "automobile has been sold"},
                    status_code = 400,
                )
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "automobile does not exist"},
                status=400,
            )

        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordListEncoder,
            safe=False,
        )

# @require_http_methods(["DELETE", "GET", "POST"])
# def api_sales_record(request, pk):
#     if request.method == "GET":
#         try:
#             sales_record = SalesRecord.objects.get(id=pk)
#     presentation = Presentation.objects.get(id=pk)
#     return JsonResponse(
#         presentation,
#         encoder=PresentationDetailEncoder,
#         safe=False,
#     )


# @require_http_methods(["PUT"])
# def api_approve_presentation(request, pk):
#     presentation = Presentation.objects.get(id=pk)
#     presentation.approve()
#     body = {
#         "presenter_name": presentation.presenter_name,
#         "presenter_email": presentation.presenter_email,
#         "title": presentation.title,
#     }
#     send_message("presentation_approvals", body)
#     return JsonResponse(
#         presentation,
#         encoder=PresentationDetailEncoder,
#         safe=False,
#     )


# @require_http_methods(["PUT"])
# def api_reject_presentation(request, pk):
#     presentation = Presentation.objects.get(id=pk)
#     presentation.reject()
#     body = {
#         "presenter_name": presentation.presenter_name,
#         "presenter_email": presentation.presenter_email,
#         "title": presentation.title,
#     }
#     send_message("presentation_rejections", body)
#     return JsonResponse(
#         presentation,
#         encoder=PresentationDetailEncoder,
#         safe=False,
#     )
