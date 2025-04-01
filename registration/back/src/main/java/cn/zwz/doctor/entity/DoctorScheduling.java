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

/**
 * @author 郑为中
 */
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "a_doctor_scheduling")
@TableName("a_doctor_scheduling")
@ApiModel(value = "陪诊员排班")
public class DoctorScheduling extends ZwzBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "陪诊员ID")
    private String doctorId;

    @ApiModelProperty(value = "陪诊员姓名")
    private String doctorName;

    @ApiModelProperty(value = "陪诊日期")
    private String date;

    @ApiModelProperty(value = "陪诊编号")
    private String number;

    /**
     * 上午 | 下午
     */
    @ApiModelProperty(value = "时段")
    private String step;

    @ApiModelProperty(value = "是否预约")
    private int orderFlag;
}