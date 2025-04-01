package cn.zwz.doctor.entity;

import cn.zwz.basics.baseClass.ZwzBaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;

/**
 * @author 郑为中
 */
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "a_hospital_order")
@TableName("a_hospital_order")
@ApiModel(value = "预约")
public class HospitalOrder extends ZwzBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "预约人ID")
    private String userId;

    @ApiModelProperty(value = "预约人姓名")
    private String userName;

    @ApiModelProperty(value = "陪诊员ID")
    private String doctorId;

    @ApiModelProperty(value = "陪诊员姓名")
    private String doctorName;

    @ApiModelProperty(value = "号源ID")
    private String orderId;

    @ApiModelProperty(value = "预约日期")
    private String dateTime;

    @ApiModelProperty(value = "时段")
    private String step;

    @ApiModelProperty(value = "排号")
    private String number;

    @ApiModelProperty(value = "预约费用")
    private BigDecimal moneyData;

    @ApiModelProperty(value = "支付情况")
    private int moneyFlag;

    /**
     *  0 正常 | 1 取消
     */
    @ApiModelProperty(value = "预约状态")
    private int status;
}